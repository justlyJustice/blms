import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/dashboard/admin/Layout";
import TopContain from "@/components/dashboard/admin/TopContain";
import Button from "@/components/Button";
import Head from "@/components/Head";
import {
  Form,
  SelectGroup,
  InputGroup,
  SubmitButton,
  TextAreaGroup,
} from "@/components/forms";

import { avatar } from "@/public/assets";
import styles from "@/styles/admin/Dashboard.module.css";
import Settings from "@/components/dashboard/admin/Settings";
import SettingsLayout from "@/components/dashboard/admin/SettingsLayout";
import Security from "@/components/dashboard/admin/Security";

const AdminSettings = () => {
  const router = useRouter();

  return (
    <SettingsLayout tab={router.query.tab}>
      <Settings />
    </SettingsLayout>
  );

  /* if (router.query.tab === "profile") {
    return <Settings />;
  }

  if (router.query.tab === "security") {
    return <Security />;
  } else return <Settings />; */
};

export default AdminSettings;
