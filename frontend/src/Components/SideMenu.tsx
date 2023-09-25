import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAnArchiveTypesQuery } from "../ReactQuery/anArchiveTypes.queries";
import { usePublicationTypesQuery } from "../ReactQuery/publicationTypes.queries";
import { FRONT_END_ROUTES, getRoute } from "../Routes";

type SideMenuItemProps = {
  label: string;
  link: string;
  level?: 1 | 2;
  active?: boolean;
  closeMenu: () => void;
};

export function SideMenuItem({
  label,
  link,
  children,
  level,
  active,
  closeMenu
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
        onClick={closeMenu}
      >
        {label}
      </Link>
      {children}
    </div>
  );
}

export function SideMenu({ closeMenu }: { closeMenu: () => void }) {
  const { data: publicationTypes } = usePublicationTypesQuery();
  const { data: anarchiveTypes } = useAnArchiveTypesQuery();
  const location = useLocation();

  return (
    <div className="grid grid-auto-column gap-6 w-full md:text-right">
      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.home)}
        label="Accueil"
        active={location.pathname === FRONT_END_ROUTES.home}
        closeMenu={closeMenu}
      />
      <div>
        <SideMenuItem
          active={
            location.pathname.includes(FRONT_END_ROUTES.anArchives) &&
            !location.search.includes("type=")
          }
          link={getRoute(FRONT_END_ROUTES.anArchives)}
          label="An-archives"
          closeMenu={closeMenu}
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
            closeMenu={closeMenu}
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
          closeMenu={closeMenu}
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
            closeMenu={closeMenu}
          />
        ))}
      </div>

      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.academique)}
        active={location.pathname === FRONT_END_ROUTES.academique}
        label="Académique"
        closeMenu={closeMenu}
      />

      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.presse)}
        label="Presse"
        active={location.pathname === FRONT_END_ROUTES.presse}
        closeMenu={closeMenu}
      />

      <SideMenuItem
        link={getRoute(FRONT_END_ROUTES.contact)}
        label="Contact"
        active={location.pathname === FRONT_END_ROUTES.contact}
        closeMenu={closeMenu}
      />
    </div>
  );
}
