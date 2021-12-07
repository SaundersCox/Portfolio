import React, { Component } from "react";
import Link from "next/dist/client/link";

export default function Nav(props) {
  console.log(props.whichActive);
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light justify-content-center">
        <div className="nav navbar-nav">
          <Link href="/posts/coding">
            <li>
              <a className="nav-item nav-link ">Coding</a>
            </li>
          </Link>
          <Link href="/posts/calisthenics">
            <li>
              <a className="nav-item nav-link">Calisthenics</a>
            </li>
          </Link>
          <Link href="/posts/cadence">
            <li>
              <a className="nav-item nav-link">Cadence</a>
            </li>
          </Link>
          <Link href="/posts/conundrum">
            <li>
              <a
                active={props.whichActive == "conundrum"}
                className="nav-item nav-link"
              >
                Conundrum {props.conundrum}
              </a>
            </li>
          </Link>
        </div>
      </nav>
    </div>
  );
}
