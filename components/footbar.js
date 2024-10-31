import React from "react";
import Link from "next/link";

const Footbar = () => {
  return (
    <div className="footbar">
      <Link href="/">
        <i className="fas fa-home" />
        <p>Esileht</p>
      </Link>
      <Link href="/fitness">
        <i className="fas fa-dumbbell" />
        <p>Treeningud</p>
      </Link>
      <Link href="/posts">
        <i className="fas fa-pen" />
        <p>Blogi</p>
      </Link>
      <Link href="/#contact">
        <i className="fas fa-phone" />
        <p>Kontakt</p>
      </Link>
    </div>
  );
};

export default Footbar;
