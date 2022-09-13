export type RawMessage = {
    sid: string,
    date_created: string,
    date_updated: string,
    date_sent?: string,
    account_sid: string,
    to: string,
    from: string,
    body: string,
    status: string,
    flags:string[],
    api_version: string,
    price?: string,
    uri: string
}