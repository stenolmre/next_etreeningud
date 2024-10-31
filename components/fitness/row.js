import React, { Fragment } from "react";
import Link from "next/link";

export const Row = ({ fit }) => {
  return (
    <Link
      href={`/fitness/${fit._id}?name=${fit.name.toLowerCase().replaceAll(" ", "-")}`}
      className="row fitness_row"
    >
      <img src={fit.image} alt={fit.name} />
      <h4>{fit.name}</h4>
      <p>{fit.category}</p>
      <p>{fit.length}</p>
      <p>{fit.equipment}</p>
      <p>{new Date(fit.createdAt).toLocaleDateString()}</p>
    </Link>
  );
};

export const Header = () => (
  <div className="row_header fitness_row_header">
    <p>#</p>
    <p>Nimi</p>
    <p>Kategooria</p>
    <p>Kestvus</p>
    <p>Equipment</p>
    <p>Kuupäev</p>
  </div>
);
