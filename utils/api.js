import { ZodError } from "zod";

const renderError = (error) => {
    if (error instanceof ZodError) {
        const messages = error.errors.map((err) => err.message);
        return { message: messages.join(', ') || 'An error occurred' }
    }
    if (error instanceof Error) {
        return { message: error.message }
    }
    return { message: JSON.stringify(error) || 'An error occurred' }
}

export async function sendEmail(schema, data) {
    try {
        const validatedData = schema.parse(data)
        const res = await fetch("/api/email", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validatedData),
        });
        if (!res.ok) {
            const errorMessage = await res.text();
            throw new Error(errorMessage || "Failed to send email");
        }
        return res;
    } catch (error) {
        const errorInfo = renderError(error)
        throw new Error(errorInfo.message)
    }
}