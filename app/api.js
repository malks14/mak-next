import Papa from "papaparse"

const api = {
  links: {
    fetch: async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vR1LYs35FcU-6iQKjG6Jx6rx5-j5Ilbfv0y3tcE9IY4jWOswKPCd0oRT6tKfxn4pavw2s-spq9ykcu1/pub?gid=0&single=true&output=csv"
      );
      const data = await res.text();
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, { header: true, complete: resolve, error: reject });
      });
      // console.log(parsed);

      return parsed.data;
    },
  },
};


export default api