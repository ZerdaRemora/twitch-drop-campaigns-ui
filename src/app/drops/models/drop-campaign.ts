import { Game } from "./game";

export class DropCampaign {
    id: number;
    name: string;
    game: Game;
    status: string;
    started: Date;
    ended: Date;
}
