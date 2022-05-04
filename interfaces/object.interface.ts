//

export interface IMission {
    mission_name: string,
    mission_id: string,
    manufacturers: [
        string
    ],
    payload_ids: [
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ],
    wikipedia: string,
    website: string,
    twitter: string,
    description: string
}