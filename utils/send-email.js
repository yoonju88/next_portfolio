'use server'
export const sendEmail = async ({ data }) => {
    const apiEndPoint = '/api/email'
    try {
        const res = await fetch(apiEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (!res.ok) {
            throw new Error('Failed to send Email')
        }
        const response = await res.json()
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        console.error('Error:', errorMessage)
    }
}
