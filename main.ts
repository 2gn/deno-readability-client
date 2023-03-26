import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

try {
  server((req: Request) => new Response ("Hello World")); 
}
catch(err) {
  console.log(err);
}
