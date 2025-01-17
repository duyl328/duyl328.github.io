export function createSideBarZH() {
  return {
    "/notes/": [
			{
				text: "html",
				collapsed: false,
				items: [
					{ text: "test", link: "/notes/html/test" },
				],
			},
		
		].map((item, i) => (!i ? item : { ...item, collapsed: true })),
  }
}

