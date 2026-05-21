// Vituka Drive Sync
import {google} from googleapis;
import {supabase} from ./supabase_client;
const docId=process.env.GEMINI_DOC_ID;
async function pushState(){const auth=new google.auth.GoogleAuth({scopes:[https://www.googleapis.com/auth/documents]});const docs=google.docs({version:v1,auth});const r=await docs.documents.get({documentId:docId});const t=r.data.body.content.map(c=>c.paragraph?.elements?.[0]?.textRun?.content||).join();const m=JSON.parse(t.match(/STATE:(.+?)END_STATE/s)[1]);const {error}=await supabase.from(gemini_state).insert({node_id:wecos-gateway,metric:m.metric,context_block:m.context_block});console.log(error?push_failed:push_ok,new Date().toISOString())}
setInterval(pushState,10000);
