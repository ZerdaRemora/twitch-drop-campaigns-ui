import { DropCampaign } from "src/app/drops/models/drop-campaign";

export class DropBenefit {
    id: string;
    name: string;
    dropCampaign: DropCampaign
    requiredMinutesWatched: number;
    entitlementLimit: number;
    benefitArtUrl: string;
    prerequisiteDrops: DropBenefit[];
}

