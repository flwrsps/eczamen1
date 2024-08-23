import React, { useState } from "react";
import scss from "./AdminPage.module.scss";
import { useForm } from "react-hook-form";

const AdminPage = () => {
  return (
    <section className={scss.AdminPage}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </section>
  );
};

export default AdminPage;
