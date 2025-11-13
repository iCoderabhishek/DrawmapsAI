

export const getResponse = async (roomId: string) => {
    const response = await fetch(`/api/v1/rooms/${roomId}/response`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    const data = await response.json()
    console.log("data = ", data)
    return data
}