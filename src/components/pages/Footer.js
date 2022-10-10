/** @format */

import React from "react";
import "../../styles/Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div>
        <button>
        <a href="https://github.com/SThevenot">
          <FaGithub />
        </a>
        </button>
        <button>
          <a href="https://discordapp.com/users/MoreThanAwkward456#0144">
            <i>
              <FaDiscord />
            </i>
          </a>
        </button>
        <button>
          <a href="https://open.spotify.com/user/connfetti007?si=b4e9d125354c4ec2">
            <FaSpotify />
          </a>
        </button>
        <button>
          <a href="mailto:sktmh007@gmail.com">
            <FaEnvelope />
          </a>
        </button>
      </div>
    </footer>
  );
}
