import { SlideEffect, Text, SlideDown, SlideUp } from './Home.styled';

export default function Home() {
  return (
    <SlideEffect>
      <Text>Welcome</Text>
      <SlideDown>to the</SlideDown>
      <SlideUp>Phonebook App</SlideUp>
    </SlideEffect>
  );
}
