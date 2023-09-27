export const sync = {
	api: "",
	forms: [
		[
			{
				title: "",
				name: "sync",
				type: "parent",
				rows: [
					{
						col: 1,
						align: "left",
						controls: [
							{
								name: "sync",
								type: "table",

								fetch: {
									api: "Report/GetMasterSyncReport",
									type: "post",
									data: {},
								},
								visible: true,
							},
						],
					},
				],
			},
		],
	],
};

export const statistics = {
	api: "",
	forms: [
		[
			{
				title: "",
				name: "sync",
				type: "parent",
				rows: [
					{
						col: 2,
						align: "alignTop",

						controls: [
							{
								name: "statistics",
								type: "table",

								fetch: {
									api: "Count/GetMasterCount",
									type: "post",
									data: {},
								},
								visible: true,
							},
							{
								name: "statistics_1",
								type: "table",

								fetch: {
									api: "Count/GetTransactionCount",
									type: "post",
									data: {},
								},
								visible: true,
							},
						],
					},
				],
			},
		],
	],
};
