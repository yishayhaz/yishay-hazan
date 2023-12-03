import { component$ } from "@builder.io/qwik";
import { Cursor } from "~/components/cursor";
import styles from "./style.module.scss";

export const HomeScreen = component$(() => {
  return (
    <>
      <main class={styles.home_screen}>
        <h1>im yishay hazan</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          possimus aut nisi. Esse sit minus autem quae, expedita perferendis
          optio eius tenetur porro libero suscipit, quibusdam, ut ab officiis
          quos?
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et neque
          provident repellendus sit, facilis nobis culpa quam vitae. Asperiores
          obcaecati laboriosam, quod soluta eveniet fugiat accusantium sed esse
          enim labore?
        </p>

        <a href="/contact">
          Read about my work
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </main>
    </>
  );
});

// {
/* <Cursor /> */
// }
