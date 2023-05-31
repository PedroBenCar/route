import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
        }}
      />
            <Tabs.Screen
        name="Tela A"
        options={{
          href: 'TelaA',
        }}
      />
            <Tabs.Screen
        name="Tela B"
        options={{
          href: 'TelaB',
        }}
      />
    </Tabs>
  );
}