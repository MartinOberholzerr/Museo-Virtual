import React from "react";
import ReactDOM from "react-dom/client";

export function Nav() {
  return (
    <ul class="flex">
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">
          CONTACTO
        </a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">
          COLECCIONES
        </a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">
          ARTISTAS
        </a>
      </li>
      <li class="mr-6">
        <a class="text-gray-400 cursor-not-allowed" href="#">
          CRÉDITOS
        </a>
      </li>
    </ul>
  );
}
