import React from "react";
import Navigation from "../components/Navigation/Navigation";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import isEmpty from "../utils/isEmpty";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      isEmpty(e.target.name.value) ||
      isEmpty(e.target.email.value) ||
      isEmpty(e.target.subject.value) ||
      isEmpty(e.target.message.value)
    ) {
      toast.warning(t("invalid_message"), {
        position: "bottom-right",
        autoClose: 3000,
        draggable: true,
        closeOnClick: true,
        hideProgressBar: false,
      });
    } else {
      emailjs
        .sendForm(
          "service_s0ayrn8",
          "template_s7czwgt",
          e.target,
          "user_9bY5S31Mlhu3gGlRYg3CT"
        )
        .then(
          (result) => {
            toast.success(t("success_message"), {
              position: "bottom-right",
              autoClose: 3000,
              draggable: true,
              closeOnClick: true,
              hideProgressBar: false,
            });
          },
          (error) => {
            toast.error(t("error_message"), {
              position: "bottom-right",
              autoClose: 3000,
              draggable: true,
              closeOnClick: true,
              hideProgressBar: false,
            });
          }
        );
      e.target.reset();
    }
  };

  return (
    <div id="contact">
      <Navigation></Navigation>
      <Form className="container" onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="hidden" name="contact_number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>{t("name")}</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{t("email")}</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
          <Form.Label>{t("subject")}</Form.Label>
          <Form.Control type="text" name="subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
          <Form.Label>{t("message")}</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <Form.Group className="col text-center" controlId="exampleForm.submit">
          <Button variant="outline-success" type="submit">
            {t("submit")}
          </Button>
        </Form.Group>
      </Form>

      <div className="container contact">
        <a href="mailto:mohamedlamine.oubaya@gmail.com">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mohamed-lamine-oubaya/"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AMINE1921"
        >
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://discordapp.com/channels/@AMINE#5328"
        >
          <i className="fab fa-discord fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
