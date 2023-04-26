const emotionData = [
  {
    label: "Happy",
    id: 1,
    icon: "sentiment_satisfied",
    disabled: false,
    rgbColor: "rgb(206, 255, 195)",
    textColor: "rgb(61, 148, 42)",
    chartColor: "rgb(61, 148, 42)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Proud",
        id: 2,
        rgbColor: "rgb(206, 255, 195)",
        textColor: "rgb(61, 148, 42)",
        chartColor: "rgb(61, 148, 42)",
        count: 0
      },
      {
        label: "Empowered",
        id: 3,
        rgbColor: "rgb(206, 255, 195)",
        textColor: "rgb(61, 148, 42)",
        chartColor: "rgb(61, 148, 42)",
        count: 0
      },
      {
        label: "Confident",
        id: 4,
        rgbColor: "rgb(206, 255, 195)",
        textColor: "rgb(61, 148, 42)",
        chartColor: "rgb(61, 148, 42)",
        count: 0
      },
    ],
  },
  {
    label: "Angry",
    id: 2,
    icon: "sentiment_extremely_dissatisfied",
    disabled: false,
    rgbColor: "rgb(255, 190, 190)",
    textColor: "rgb(225, 85, 85)",
    chartColor: "rgb(225, 85, 85)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Offended",
        id: 2,
        rgbColor: "rgb(255, 190, 190)",
        textColor: "rgb(225, 85, 85)",
        chartColor: "rgb(225, 85, 85)",
        count: 0
      },
      {
        label: "Ashamed",
        id: 3,
        rgbColor: "rgb(255, 190, 190)",
        textColor: "rgb(225, 85, 85)",
        chartColor: "rgb(225, 85, 85)",
        count: 0
      },
      {
        label: "Frustrated",
        id: 4,
        rgbColor: "rgb(255, 190, 190)",
        textColor: "rgb(225, 85, 85)",
        chartColor: "rgb(225, 85, 85)",
        count: 0
      }
    ]
  },
  {
    label: "Scared",
    id: 3,
    icon: "mood_bad",
    disabled: false,
    rgbColor: "rgb(243, 189, 255)",
    textColor: "rgb(127, 62, 159)",
    chartColor: "rgb(127, 62, 159)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Horrified",
        id: 2,
        rgbColor: "rgb(243, 189, 255)",
        textColor: "rgb(127, 62, 159)",
        chartColor: "rgb(127, 62, 159)",
        count: 0
      },
      {
        label: "Embarrased",
        id: 3,
        rgbColor: "rgb(243, 189, 255)",
        textColor: "rgb(127, 62, 159)",
        chartColor: "rgb(127, 62, 159)",
        count: 0
      },
      {
        label: "Anxious",
        id: 4,
        rgbColor: "rgb(243, 189, 255)",
        textColor: "rgb(127, 62, 159)",
        chartColor: "rgb(127, 62, 159)",
        count: 0
      }
    ]
  },

  {
    label: "Excited",
    id: 4,
    icon: "sentiment_very_satisfied",
    disabled: false,
    rgbColor: "rgb(255, 239, 153)",
    textColor: "rgb(176, 148, 0)",
    chartColor: "rgb(254, 225, 53)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Inspired",
        id: 2,
        rgbColor: "rgb(255, 239, 153)",
        textColor: "rgb(176, 148, 0)",
        chartColor: "rgb(254, 225, 53)",
        count: 0
      },
      {
        label: "Focused",
        id: 3,
        rgbColor: "rgb(255, 239, 153)",
        textColor: "rgb(176, 148, 0)",
        chartColor: "rgb(254, 225, 53)",
        count: 0
      },
      {
        label: "Energetic",
        id: 4,
        rgbColor: "rgb(255, 239, 153)",
        textColor: "rgb(176, 148, 0)",
        chartColor: "rgb(254, 225, 53)",
        count: 0
      }
    ]
  },
  {
    label: "Sad",
    id: 5,
    icon: "sentiment_dissatisfied",
    disabled: false,
    rgbColor: "rgb(184, 204, 244)",
    textColor: "rgb(63, 103, 179)",
    chartColor: "rgb(63, 103, 179)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Depressed",
        id: 2,
        rgbColor: "rgb(184, 204, 244)",
        textColor: "rgb(63, 103, 179)",
        chartColor: "rgb(63, 103, 179)",
        count: 0
      },
      {
        label: "Lonely",
        id: 3,
        rgbColor: "rgb(184, 204, 244)",
        textColor: "rgb(63, 103, 179)",
        chartColor: "rgb(63, 103, 179)",
        count: 0
      },
      {
        label: "Hurt",
        id: 4,
        rgbColor: "rgb(184, 204, 244)",
        textColor: "rgb(63, 103, 179)",
        chartColor: "rgb(63, 103, 179)",
        count: 0
      }
    ]
  },
  {
    label: "Neutral",
    id: 6,
    icon: "sentiment_neutral",
    disabled: false,
    rgbColor: "rgb(255, 227, 202)",
    textColor: "rgb(255, 129, 13)",
    chartColor: "rgb(143, 157, 186)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Peaceful",
        id: 2,
        rgbColor: "rgb(255, 227, 202)",
        textColor: "rgb(255, 129, 13)",
        chartColor: "rgb(143, 157, 186)",
        count: 0
      },
      {
        label: "Rested",
        id: 3,
        rgbColor: "rgb(255, 227, 202)",
        textColor: "rgb(255, 129, 13)",
        chartColor: "rgb(143, 157, 186)",
        count: 0
      },
      {
        label: "Balanced",
        id: 4,
        rgbColor: "rgb(255, 227, 202)",
        textColor: "rgb(255, 129, 13)",
        chartColor: "rgb(143, 157, 186)",
        count: 0
      }
    ]
  },
];

export default emotionData;
