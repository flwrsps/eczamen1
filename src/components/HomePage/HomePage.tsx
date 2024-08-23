"use client"
import React, { useState } from "react";
import scss from "./HomePage.module.scss";
import { useForm } from "react-hook-form";

interface TodoType {
  _id: number;
  name: string;
  password: number;
  photo: string;
}
const HomePage = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <section className={scss.HomePage}>
      <h3>admin</h3>
      <div className="container">
        <form>
          <div className={scss.content}>
            <input className={scss.inputs} placeholder="nama" type="text" />
            <input className={scss.inputs} placeholder="password" type="text" />
            <input className={scss.inputs} placeholder="photo" type="text" />
            <button className={scss.buttons}>click</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HomePage;
