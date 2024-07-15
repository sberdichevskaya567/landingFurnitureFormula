interface IRandomId {
    id: string
}

const useRandomId = (): IRandomId => {
    const id = crypto.randomUUID()
    return {
        id
    }
}
export {
    useRandomId
}