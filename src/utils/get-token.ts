export const GetToken = async (): Promise<string > => {
    return await localStorage.getItem('tk') || ''
}