interface Env {
    ASSET: Fetcher;
    DB: D1Database;
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname.startsWith("/api/kedais")) {
           if (request.method == 'GET') {
                let result = await env.DB.prepare("SELECT * FROM kedai").all();
                return Response.json(result.results);
        }       else if (request.method == 'POST') {
                const newId = crypto.randomUUID()
                const input = await request.json<any>()
                const query = 'INSERT INTO kedais(id,name,address,time) values ("${newId}", "${input.name}", "${input.address}", ${input.time})';
                const newKedai = await env.DB.exec(query);
                return Response.json(newKedai);
        }
    }


        return env.ASSET.fetch(request);
    }
}satisfies ExportedHandler<Env>;