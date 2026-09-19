export interface StatusCode {
  code: number;
  title: string;
  memeName: string;
  desc: string;
  usage: string;
  source?: string;
}

export const statusCodes: StatusCode[] = [
  {
    code: 100,
    title: "Continue",
    memeName: "One More Turn",
    desc: "It is 3am. You said this an hour ago. You will say it again in an hour.",
    usage: "The server has heard you out so far and is willing to let you keep going."
  },
  {
    code: 102,
    title: "Processing",
    memeName: "It's Loading, Trust",
    desc: "The spinner has been spinning long enough that you now consider it a pet.",
    usage: "Request received, still working, no answer yet. Please stop refreshing."
  },
  {
    code: 200,
    title: "OK",
    memeName: "Stonks",
    desc: "Everything worked on the first try. Do not touch anything. Do not breathe.",
    usage: "The request succeeded. Enjoy this, it will not happen twice today.",
    source: "https://knowyourmeme.com/memes/stonks"
  },
  {
    code: 201,
    title: "Created",
    memeName: "I Made This",
    desc: "Something new exists now, and someone is already taking credit for it.",
    usage: "The request created a resource. Its location is in the Location header."
  },
  {
    code: 202,
    title: "Accepted",
    memeName: "I'll Do It Later",
    desc: "Your request has been added to a queue that has never once been emptied.",
    usage: "Accepted for processing, with no promise it ever actually finishes."
  },
  {
    code: 204,
    title: "No Content",
    memeName: "Left On Read",
    desc: "It went through. They saw it. There is simply nothing coming back.",
    usage: "Success, but there is no body to return. Do not navigate away."
  },
  {
    code: 301,
    title: "Moved Permanently",
    memeName: "New Phone Who Dis",
    desc: "Same person, new handle, no intention of ever answering on the old one.",
    usage: "The resource has a new home. Update your bookmarks, this one is forever."
  },
  {
    code: 302,
    title: "Found",
    memeName: "BRB",
    desc: "Gone for a bit. Back eventually. Do not update anything on their account.",
    usage: "Temporarily somewhere else. Keep using the original URL next time."
  },
  {
    code: 304,
    title: "Not Modified",
    memeName: "Nothing Ever Happens",
    desc: "You refreshed for the ninth time. It is the same. It was always the same.",
    usage: "Your cached copy is still current, so the server sent nothing at all."
  },
  {
    code: 400,
    title: "Bad Request",
    memeName: "Bruh",
    desc: "Whatever you just sent, the server does not have words for it. Only that one.",
    usage: "Malformed request. The server will not even guess at what you meant."
  },
  {
    code: 401,
    title: "Unauthorized",
    memeName: "You Must Be New Here",
    desc: "You have not logged in and it shows. Everyone can tell. It is very obvious.",
    usage: "No valid credentials. Authenticate and come back."
  },
  {
    code: 402,
    title: "Payment Required",
    memeName: "Shut Up And Take My Money",
    desc: "The feature you want is behind a wall, and the wall accepts cards.",
    usage: "Reserved for payment. Largely unused, which is the funniest part.",
    source: "https://knowyourmeme.com/memes/shut-up-and-take-my-money"
  },
  {
    code: 403,
    title: "Forbidden",
    memeName: "You Shall Not Pass",
    desc: "The server knows exactly who you are. That is the entire problem.",
    usage: "Authenticated and still refused. More credentials will not help."
  },
  {
    code: 404,
    title: "Not Found",
    memeName: "It's Gone",
    desc: "The link worked in 2019. The site was sold. The page is in the sea now.",
    usage: "No resource at this URL, and the server will not say whether there ever was."
  },
  {
    code: 405,
    title: "Method Not Allowed",
    memeName: "Not How Any Of This Works",
    desc: "You found the right door and then tried to go through it sideways.",
    usage: "The endpoint exists, but not for the verb you used."
  },
  {
    code: 408,
    title: "Request Timeout",
    memeName: "Active 3 Hours Ago",
    desc: "The connection was open the whole time. You just never said anything.",
    usage: "The client took too long to send the request, so the server moved on."
  },
  {
    code: 409,
    title: "Conflict",
    memeName: "Two Spider-Men Pointing",
    desc: "Two edits, same record, same second, both absolutely certain they are right.",
    usage: "Your change collides with the current state. Re-read, then retry.",
    source: "https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man"
  },
  {
    code: 410,
    title: "Gone",
    memeName: "Deleted The Tweet",
    desc: "Removed on purpose, and everyone involved would like you to stop bringing it up.",
    usage: "Permanently gone, deliberately. Unlike 404, the server is certain."
  },
  {
    code: 413,
    title: "Payload Too Large",
    memeName: "TL;DR",
    desc: "You wrote eleven paragraphs. Nobody is reading eleven paragraphs.",
    usage: "The request body exceeds what the server is willing to accept."
  },
  {
    code: 418,
    title: "I'm a teapot",
    memeName: "The Original Shitpost",
    desc: "A joke from 1998 that became a real thing people implement in production.",
    usage: "The server refuses to brew coffee, because it is, in fact, a teapot.",
    source: "https://knowyourmeme.com/memes/http-418-im-a-teapot"
  },
  {
    code: 422,
    title: "Unprocessable Entity",
    memeName: "Technically Correct",
    desc: "Valid JSON. Correct types. Absolutely unhinged values. Best kind of correct.",
    usage: "The syntax parsed fine, but the meaning is nonsense."
  },
  {
    code: 425,
    title: "Too Early",
    memeName: "First!",
    desc: "You got there before anyone else and everybody wishes you had not.",
    usage: "The server will not risk replaying this request yet. Try again shortly."
  },
  {
    code: 426,
    title: "Upgrade Required",
    memeName: "Still On Windows 7",
    desc: "It runs great, it has never crashed, and nothing on the internet will load.",
    usage: "The server refuses your protocol version and names one it will accept."
  },
  {
    code: 429,
    title: "Too Many Requests",
    memeName: "Ratio",
    desc: "You said one thing. The entire internet arrived to discuss it with you.",
    usage: "Rate limited. Read Retry-After and go outside for a moment."
  },
  {
    code: 451,
    title: "Unavailable For Legal Reasons",
    memeName: "Not Available In Your Country",
    desc: "The content exists, is fully intact, and is thirty kilometres that way.",
    usage: "Blocked for legal reasons, not technical ones. The number is a Bradbury joke."
  },
  {
    code: 500,
    title: "Internal Server Error",
    memeName: "This Is Fine",
    desc: "The room is on fire. The dog is seated. The status page is still green.",
    usage: "Something broke inside and the server will not tell you what.",
    source: "https://knowyourmeme.com/memes/this-is-fine"
  },
  {
    code: 502,
    title: "Bad Gateway",
    memeName: "Works On My Machine",
    desc: "Your service is fine. Their service is fine. Between them, something is not.",
    usage: "An upstream server returned a response this one could not make sense of."
  },
  {
    code: 503,
    title: "Service Unavailable",
    memeName: "Server Is Cooked",
    desc: "One influencer posted the link and the entire fleet went down in ninety seconds.",
    usage: "Temporarily unable to serve. Overloaded, or down on purpose."
  },
  {
    code: 504,
    title: "Gateway Timeout",
    memeName: "Waiting Skeleton",
    desc: "Still at the table. Still loyal. No longer technically alive.",
    usage: "The upstream server never answered in time."
  },
  {
    code: 507,
    title: "Insufficient Storage",
    memeName: "Storage Almost Full",
    desc: "You have deleted the same three apps four times and nothing has improved.",
    usage: "The server cannot store what it would need to finish this request."
  },
  {
    code: 511,
    title: "Network Authentication Required",
    memeName: "Free WiFi*",
    desc: "The asterisk means a portal, an email address, and agreeing to unspeakable terms.",
    usage: "You must authenticate with the network itself before anything will load."
  }
];
