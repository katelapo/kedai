interface Env {
    ASSET: Fetcher;
}

export default {
    fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname.startsWith("/api/kedais")) {
            return Response.json([
                {
                    id: 1,
                    name: "Kedai A",
                    location: "Location A",
                    rating: 4.5,
                    imageUrl: "https://example.com/kedai-a.jpg"
                },
                {
                    id: 2,
                    name: "Kedai B",
                    location: "Location B",
                    rating: 4.0,
                    imageUrl: "https://example.com/kedai-b.jpg"
                },
            ]);
        }

        return env.ASSET.fetch(request);
    },
}satisfies ExportedHandler<Env>;