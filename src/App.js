import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

const persons = [
  {
    name: "Pravesh",
    title: "CEO",
    age: 29,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "nepali", id: 3 },
    ],
  },
  {
    name: "Kalam",
    title: "Developer",
    age: 25,
    languages: [
      { name: "english", id: 1 },
      { name: "finnish", id: 2 },
      { name: "nepali", id: 3 },
    ],
  },
  {
    name: "Benzama",
    title: "Designer",
    age: 35,
    languages: [
      { name: "english", id: 1 },
      { name: "nepali", id: 2 },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        {persons.map((person) => (
          <Box
            key={person.name}
            name={person.name}
            title={person.title}
            age={person.age}
            lang={person.languages.map((lang) => (
              <li key={lang.id}>{lang.name}</li>
            ))}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
