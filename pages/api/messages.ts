// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json([
        {
          "sid": "SM1f0e8ae6ade43cb3c0ce4525424e404f",
          "date_created": "Fri, 13 Aug 2010 01:16:24 +0000",
          "date_updated": "Fri, 13 Aug 2010 01:16:24 +0000",
          "date_sent": null,
          "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          "to": "+15305431221",
          "from": "John Smith",
          "body": "A Test Message",
          "status": "queued",
          "flags":["outbound"],
          "api_version": "2010-04-01",
          "price": null,
          "uri": "\/2010-04-01\/Accounts\/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\/Messages\/SM1f0e8ae6ade43cb3c0ce4525424e404f.json"
        },
        {
          "sid": "SM1f0e8ae6ade43cb3c0ce4525424a202b",
          "date_created": "Sat, 14 Aug 2010 01:16:24 +0000",
          "date_updated": "Sat, 14 Aug 2010 01:16:24 +0000",
          "date_sent": null,
          "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          "to": "+15305431221",
          "from": "Jesi Ayala-Gonzalez",
          "body": "Test 2",
          "status": "queued",
          "flags":["outbound"],
          "api_version": "2010-04-01",
          "price": null,
          "uri": "\/2010-04-01\/Accounts\/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\/Messages\/SM1f0e8ae6ade43cb3c0ce4525424e404f.json"
        },
        
      ]);
}
