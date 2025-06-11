import { CONFIG } from "@/shared/model/config";
import type { PathParams, ROUTES } from "@/shared/model/routes";
import { useParams } from "react-router-dom";

function BoardPage(){

    console.log(CONFIG.API_BASE_URL)

    const params = useParams<PathParams[typeof ROUTES.BOARD]>()

    return <div>Board Page. Params {params.boardId}</div>
}

export const Component = BoardPage;