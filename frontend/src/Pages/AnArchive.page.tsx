import { Navigate, useParams } from "react-router-dom";
import { BlockDisplayer } from "../Components/BlocksDisplayer";
import { Date } from "../Components/Date";
import { PageLayout } from "../Components/PageLayout";
import { useAnArchiveQuery } from "../ReactQuery/anArchives.queries";
import { FRONT_END_ROUTES, getRoute } from "../Routes";

export function AnArchivePage() {
  const params = useParams();
  const { data: anArchive, isLoading } = useAnArchiveQuery(params.id || "");

  if (!isLoading && !anArchive?.content) {
    return <Navigate to={getRoute(FRONT_END_ROUTES.anArchives)} />;
  }

  return (
    <PageLayout title={anArchive?.title}>
      {anArchive?.date && (
        <div className="mb-8">
          <Date date={anArchive?.date} />
        </div>
      )}
      {anArchive?.content && (
        <BlockDisplayer blocks={anArchive.content.blocks} />
      )}
    </PageLayout>
  );
}
