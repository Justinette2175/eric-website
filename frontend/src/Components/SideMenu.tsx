import { PropsWithChildren, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAnArchiveTypesQuery } from "../ReactQuery/anArchiveTypes.queries";
import { usePublicationTypesQuery } from "../ReactQuery/publicationTypes.queries";
import { FRONT_END_ROUTES, getRoute } from "../Routes";

type SideMenuItemProps = {
  label: string;
  link: string;
  level?: 1 | 2;
  active?: boolean;
};

export function SideMenuItem({
  label,
  link,
  children,
  level,
  active
}: PropsWithChildren<SideMenuItemProps>) {
  return (
    <div
      className={`underline-offset-4 cursor-pointer hover:underline ${
        active && "underline"
      } `}
    >
      <Link
        to={link}
        className={`block ${level === 2 ? "text-md" : "text-lg"} `}
      >
        {label}
      </Link>
      {children}
    </div>
  );
}

export function SideMenu() {
  const { data: publicationTypes } = usePublicationTypesQuery();
  const { data: anarchiveTypes } = useAnArchiveTypesQuery();
  const location = useLocation();

  return (
    <div className="grid grid-auto-column gap-6 w-full text-right">
      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.home)}
        label="Accueil"
        active={location.pathname === FRONT_END_ROUTES.home}
      />
      <div>
        <SideMenuItem
          active={
            location.pathname.includes(FRONT_END_ROUTES.anArchives) &&
            !location.search.includes("type=")
          }
          link={getRoute(FRONT_END_ROUTES.anArchives)}
          label="An-archives"
        />
        {anarchiveTypes?.map((type) => (
          <SideMenuItem
            key={type.id}
            link={`${getRoute(FRONT_END_ROUTES.anArchives)}?type=${type.id}`}
            active={
              location.pathname === FRONT_END_ROUTES.anArchives &&
              location.search.includes(`type=${type.id}`)
            }
            label={type.name || ""}
            level={2}
          />
        ))}
      </div>

      <div>
        <SideMenuItem
          active={
            location.pathname.includes(FRONT_END_ROUTES.publications) &&
            !location.search.includes("type=")
          }
          link={getRoute(FRONT_END_ROUTES.publications)}
          label="Publications"
        ></SideMenuItem>

        {publicationTypes?.map((type) => (
          <SideMenuItem
            key={type.id}
            link={`${getRoute(FRONT_END_ROUTES.publications)}?type=${type.id}`}
            active={
              location.pathname === FRONT_END_ROUTES.publications &&
              location.search.includes(`type=${type.id}`)
            }
            label={type.name || ""}
            level={2}
          />
        ))}
      </div>

      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.academique)}
        active={location.pathname === FRONT_END_ROUTES.academique}
        label="Académique"
      />

      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.presse)}
        label="Presse"
        active={location.pathname === FRONT_END_ROUTES.presse}
      />

      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.contact)}
        label="Contact"
        active={location.pathname === FRONT_END_ROUTES.contact}
      />
    </div>
  );
}
