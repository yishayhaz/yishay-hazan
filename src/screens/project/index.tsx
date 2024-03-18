import { $, component$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import { getImagePath, mdStringToHtml, titleize } from "~/utils";
import type { Project } from "~/types";
import db from "~/db/projects.json";
import { ImageModal } from "~/components/image_modal";
import { Breadcrumbs } from "~/components/breadcrumbs";

export const ProjectScreen = component$(() => {
  const location = useLocation();
  const data = useStore<{ project: Project; isLoading: boolean }>({
    isLoading: true,
  } as { isLoading: boolean; project: Project });
  const showImg = useSignal<string>("");

  useTask$(() => {
    const project = db.find((p) => p.folder === location.params.project);

    if (!project) {
      throw new Error("Project not found");
    }

    data.project = project as Project;
    data.isLoading = false;
  });

  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {showImg.value.length ? (
        <ImageModal
          show
          onClose={$(() => {
            showImg.value = "";
          })}
          src={showImg.value}
          alt="image"
        />
      ) : null}
      <article class={styles.project_screen}>
        <Breadcrumbs
          links={[
            { href: "/", label: "Projects" },
            { label: data.project.name },
          ]}
        />
        <div class={styles.block}>
          <h1>{titleize(data.project.name)}</h1>
          <span>{data.project.timeline}</span>
          <p dangerouslySetInnerHTML={data.project.shortDescription} />
        </div>
        {data.project.content.map((content, idx) => (
          <div class={styles.block} key={idx}>
            <h2>{content.title}</h2>
            <p dangerouslySetInnerHTML={mdStringToHtml(content.content)} />
          </div>
        ))}
        <div class={styles.block}>
          <h2>Gallery</h2>
          <div class={styles.gallery}>
            {data.project.gallery.map((path, idx) => (
              <div
                key={idx}
                onClick$={() => {
                  showImg.value = path;
                }}
              >
                <img
                  src={getImagePath(data.project.folder, path)}
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
});
