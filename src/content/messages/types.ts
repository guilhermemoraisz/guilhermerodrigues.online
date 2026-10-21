export type Messages = {
  navigation: { skip: string; experience: string; education: string; contact: string; home: string };
  hero: { role: string; intro: string; summary: string; resume: string };
  experience: {
    title: string;
    present: string;
    cit: {
      role: string;
      automotiveClient: { title: string; paragraphs: string[] };
      bootcamp: { title: string; paragraphs: string[] };
    };
    screenNetwork: { role: string; kind: string; paragraphs: string[] };
  };
  education: { title: string; course: string; institution: string; expected: string };
  contact: { title: string; heading: string; description: string; email: string; backToTop: string };
  theme: { light: string; dark: string; loading: string };
  metadata: { title: string; description: string };
};
