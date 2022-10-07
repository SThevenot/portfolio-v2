import React from "react";
import "../../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa-brands fa-discord } from "@f@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
<footer>
<div>
  <button>
    <a href="https://github.com/SThevenot" target="_blank"
      ><i class="fa-brands fa-github"></i
    ></a>
  </button>
  <button>
    <a
      href="https://discordapp.com/users/MoreThanAwkward456#0144"
      target="_blank"
      ><i class="fa-brands fa-discord"></i
    ></a>
  </button>
  <button>
    <a
      href="https://open.spotify.com/user/connfetti007?si=b4e9d125354c4ec2"
      target="_blank"
      ><i class="fa-brands fa-spotify"></i
    ></a>
  </button>
  <button>
    <a href="mailto:sktmh007@gmail.com"
      ><i class="fa-solid fa-envelope"></i
    ></a>
  </button>
</div>
</footer>
);
}