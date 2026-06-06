type AppConfigType = {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfigType = {
    name: import.meta.env.VITE_APP_NAME ?? "",
    github: {
        title: "Catch me on Github",
        url: "https://github.com/Amarnath0604/",
    },
    author: {
        name: "Amar",
        url: "https://amarnath-r.netlify.app/",
    }
}

export const baseUrl = import.meta.env.VITE_BASE_URL ?? ""
