interface Env {
    ASSET: Fetcher;
    DB: D1Database;
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname.startsWith("/api/kedais")) {
            let result = await env.DB.prepare("SELECT * FROM kedais").all();
            return Response.json(result);
        }

        return env.ASSET.fetch(request);
    }
}satisfies ExportedHandler<Env>;