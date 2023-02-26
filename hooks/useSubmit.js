import { useState } from "react";
import { useRouter } from "next/router";
/* import { toast } from "react-toastify"; */

import logger from "@/utils/logger";
import { getStatus } from "@/utils/statusCodes";

const useSubmit = (apiFunc) => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(false);

  const submit = async (
    urlParam,
    navigateTo,
    successMessage = `Success!`,
    resetForm
  ) => {
    setSubmitting(true);
    const res = await apiFunc(urlParam);
    setSubmitting(false);

    if (!res) {
      setSubmitting(false);
      return alert(`Something went wrong!`);
    }

    if (res.ok) {
      setSuccess(true);
      setData(res.data);
      alert(successMessage);

      if (resetForm) {
        resetForm();
      }

      if (navigateTo) {
        setTimeout(() => {
          router.push(navigateTo);
        }, 4000);
      }

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }

    if (!res.ok) {
      setError(true);
      logger(res);
      setStatus(getStatus(res.problem));

      alert(res.data.message);

      setTimeout(() => {
        setError(false);
      }, 4000);
    }

    return res;
  };

  return { data, error, success, submit, submitting, status };
};

export default useSubmit;