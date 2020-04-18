export class Request {
  _id: string
  title: string
  whereAbout: string
  status: string
  createdAt: Date
  company: { _id: string, name: string }
  device: { _id: string, model: string }
  issue: { _id: string, name: string }
  otherIssue: string
  city: { _id: string, name: string }
}
