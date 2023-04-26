const emotionData = [
  {
    label: "Happy",
    id: 1,
    icon: "sentiment_satisfied",
    disabled: false,
    rgbColor: "rgb(206 255 195)",
    textColor: "rgb(61 148 42)",
    chartColor: "rgb(61, 148, 42)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Proud",
        id: 2,
        rgbColor: "rgb(206 255 195)",
        textColor: "rgb(61 148 42)",
        chartColor: "rgb(46, 114, 31)",
        count: 0
      },
      {
        label: "Empowered",
        id: 3,
        rgbColor: "rgb(206 255 195)",
        textColor: "rgb(61 148 42)",
        chartColor: "rgb(37, 91, 25)",
        count: 0
      },
      {
        label: "Confident",
        id: 4,
        rgbColor: "rgb(206 255 195)",
        textColor: "rgb(61 148 42)",
        chartColor: "rgb(29, 71, 19)",
        count: 0
      },
    ],
  },
  {
    label: "Angry",
    id: 2,
    icon: "sentiment_extremely_dissatisfied",
    disabled: false,
    rgbColor: "rgb(255 190 190)",
    textColor: "rgb(225, 85, 85)",
    chartColor: "rgb(225 85 85)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Offended",
        id: 2,
        rgbColor: "rgb(255 190 190)",
        textColor: "rgb(225, 85, 85)",
        chartColor: "rgb(176, 56, 56)",
        count: 0
      },
      {
        label: "Ashamed",
        id: 3,
        rgbColor: "rgb(255 190 190)",
        textColor: "rgb(225, 85, 85)",
        chartColor: "rgb(143, 43, 43)",
        count: 0
      },
      {
        label: "Frustrated",
        id: 4,
        rgbColor: "rgb(255 190 190)",
        textColor: "rgb(225, 85, 85)",
        chartColor: "rgb(107, 30, 30)",
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
    textColor: "rgb(127 62 159)",
    chartColor: "rgb(127, 62, 159)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Horrified",
        id: 2,
        rgbColor: "rgb(243, 189, 255)",
        textColor: "rgb(127 62 159)",
        chartColor: "rgb(116, 55, 147)",
        count: 0
      },
      {
        label: "Embarrased",
        id: 3,
        rgbColor: "rgb(243, 189, 255)",
        textColor: "rgb(127 62 159)",
        chartColor: "rgb(85, 40, 108)",
        count: 0
      },
      {
        label: "Anxious",
        id: 4,
        rgbColor: "rgb(243, 189, 255)",
        textColor: "rgb(127 62 159)",
        chartColor: "rgb(65, 29, 83)",
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
    chartColor: "rgb(254,225,53)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Inspired",
        id: 2,
        rgbColor: "rgb(255, 239, 153)",
        textColor: "rgb(176, 148, 0)",
        chartColor: "rgb(228, 179, 4)",
        count: 0
      },
      {
        label: "Focused",
        id: 3,
        rgbColor: "rgb(255, 239, 153)",
        textColor: "rgb(176, 148, 0)",
        chartColor: "rgb(191, 150, 1)",
        count: 0
      },
      {
        label: "Energetic",
        id: 4,
        rgbColor: "rgb(255, 239, 153)",
        textColor: "rgb(176, 148, 0)",
        chartColor: "rgb(170, 136, 0)",
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
        chartColor: "rgb(45, 76, 135)",
        count: 0
      },
      {
        label: "Lonely",
        id: 3,
        rgbColor: "rgb(184, 204, 244)",
        textColor: "rgb(63, 103, 179)",
        chartColor: "rgb(33, 57, 102)",
        count: 0
      },
      {
        label: "Hurt",
        id: 4,
        rgbColor: "rgb(184, 204, 244)",
        textColor: "rgb(63 103 179)",
        chartColor: "rgb(25, 45, 83)",
        count: 0
      }
    ]
  },
  {
    label: "Neutral",
    id: 6,
    icon: "sentiment_neutral",
    disabled: false,
    rgbColor: "rgb(215, 215, 215)",
    textColor: "rgb(59, 71, 97)",
    chartColor: "rgb(215, 215, 215)",
    count: [],
    total: 0,
    subEmotions: [
      {
        label: "Peaceful",
        id: 2,
        rgbColor: "rgb(166, 162, 162)",
        textColor: "rgb(59, 71, 97)",
        chartColor: "rgb(166, 162, 162)",
        count: 0
      },
      {
        label: "Rested",
        id: 3,
        rgbColor: "rgb(131, 131, 131)",
        textColor: "rgb(59, 71, 97)",
        chartColor: "rgb(131, 131, 131)",
        count: 0
      },
      {
        label: "Balanced",
        id: 4,
        rgbColor: "rgb(81, 80, 80)",
        textColor: "rgb(59, 71, 97)",
        chartColor: "rgb(81, 80, 80)",
        count: 0
      }
    ]
  },
];

export default emotionData;
