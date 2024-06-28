interface Symptom {
  question: string;
  belief: number;
}

const symptoms: Symptom[] = [
  { question: "Apakah anda mengalami panas tinggi?", belief: 0.8 },
  { question: "Apakah anda mengalami suhu tubuh naik turun?", belief: 0.6 },
  { question: "Apakah anda mengalami sakit Kepala?", belief: 0.4 },
  { question: "Apakah anda mengalami sakit Punggung?", belief: 0.6 },
  { question: "Apakah anda mengalami sakit Otot-otot?", belief: 0.5 },
  { question: "Apakah anda mengalami sakit Bola Mata?", belief: 0.4 },
  { question: "Apakah anda mengalami mual/Muntah?", belief: 0.3 },
  { question: "Apakah anda mengalami sakit Perut/Kram?", belief: 0.6 },
  { question: "Apakah anda mengalami ruam?", belief: 0.4 },
  { question: "Apakah anda mengalami tekanan Darah Menurun?", belief: 0.6 },
  { question: "Apakah anda suka merancau?", belief: 0.5 },
];

export { symptoms, type Symptom };
