/** @format */

import React from "react";
import "../../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div>
        <button>
          <a href="https://github.com/SThevenot" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </button>
        <button>
          <a
            href="https://discordapp.com/users/MoreThanAwkward456#0144"
          >
            <FontAwesomeIcon icon="fa-brands fa-discord" />
          </a>
        </button>
        <button>
          <a
            href="https://open.spotify.com/user/connfetti007?si=b4e9d125354c4ec2"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-spotify" />
          </a>
        </button>
        <button>
          <a href="mailto:sktmh007@gmail.com">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </a>
        </button>
      </div>
    </footer>
  );
}
