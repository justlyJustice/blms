import { Formik } from "formik";

const AppForm = ({
  children,
  onSubmit,
  validationSchema,
  initialValues,
  ...props
}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      {...props}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
