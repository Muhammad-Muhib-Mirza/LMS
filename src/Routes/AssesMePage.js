import { AnimatePresence } from "framer-motion";
import AssesMe from "../Component/SignUpPage/AssesMe";
import { useState } from "react";

export default function AssesMePage() { // Updated name here
  const [formData, setFormData] = useState({
    userExtrovert: '',
    userSensing: '',
    userThinking: '',
    userJudger: '',
    confirmPassword: ''
  });
  const [showAssesmentForm, setShowAssesmentForm] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);

  return (
    <AnimatePresence>
      <AssesMe 
        setSuccessSubmit={setSuccessSubmit} 
        setFormData={setFormData} 
        setShowAssesmentForm={setShowAssesmentForm} 
        formData={formData}
      />
    </AnimatePresence>
  );
}
