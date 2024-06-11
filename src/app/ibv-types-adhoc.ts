export interface JSONloginRequest {
    client_id: string;
    client_secret: string;
    username: string;
    password: string;
    grant_type: string;
    license_code: string;
    device: string;
}