<template>
  <div class="container page">
    <h2 class="pt-4">
      🏴‍☠️ Piráti - Volební kalkulačka k primárkám do voleb EP 2024
    </h2>
    <!-- <div class="card border-info mb-3 p-4">
    </div> -->
    <div class="card mb-3 p-4">
      <p>Vážení členové Celostátního fóra a příznivci České pirátské strany,</p>
      <p>představujeme Vám první Pirátskou volební kalkulačku.</p>
      <p>Pirátská Kalkulačka neslouží ke komunikaci k voličům navenek, ale k pomoci členské základně informovaně rozhodnout koho volit.</p>
      <p>Pirátská kalkulačka funguje obdobným způsobem jako běžná volební kalkulačka, po otevření kalkulačky budete dotázáni na 31 otázek, na každou budete moci odpovědět Ano, Ne nebo Neutrální. Na konci kalkulačky budete moci označit libovolný počet otázek jako zásadní, ty budou mít vyšší váhu ve srovnání. Odpověď Neutrální funguje jako Přeskočit.</p>
      <p>U každé otázky naleznete doplňující poznámku, někdy i s odkazem na externí zdroj. Zde jsou doplněny další podrobnosti a informace, klíčové je ale vždy samotné znění otázky, veškeré další informace jsou jen doprovodné. Otázky byly vybrány na základě vstupů od členů a následného výběru, doplnění a úprav od týmu.</p>
      <p>Na konci kalkulačky se Vám zobrazí názorová shoda se 16 kandidáty na lídra a čelo, kteří nám poskytnuli své odpovědi. Každého kandidáta si zde můžete rozkliknout, přečíst si detailně jeho odpovědi včetně komentáře nebo si i porovnat více kandidátů najednou. Kandidáti na lídra jsou označeni žlutým kolečkem. V průběhu září přidáme i ostatní kandidáty.</p>
      <p>Pod výsledky naleznete také odkaz na poskytnutí vaší zpětné vazby ke kalkulačce.</p>
      <p>Věříme, že si kalkulačku oblíbíte a pomůže Vám splnit demokratické minimum při volbě.</p>
      <p>za tým tvůrců kalkulačky</p>
      <p>Vojtěch Pikal, Linda Kašpárková, Tomáš Válek, Tomáš Adamec a Michal Škop</p>
    </div>
    <hr/>
    <div class="d-grid gap-2">
      <NuxtLink to="/question/1/" class="btn btn-dark btn-lg">🏴‍☠️ SPUSTIT KALKULAČKU - PRIMÁRKY PIRÁTI EP 2024 🏴‍☠️</NuxtLink>
    </div>
    <hr/>
    <!-- <h3>Uložené vyplněné kalkulačky</h3>
    <StoredCalcs /> -->
    <hr/>
    <!-- <Darujme /> -->
    <!-- <Analytics /> -->
  </div>
</template>

<script>
// import Darujme from "~/components/Darujme.vue"
// import Analytics from "~/components/Analytics.vue"

export default {
  head: function() {
    return {
      title: '🏴‍☠️ Piráti - Volební kalkulačka k primárkám do voleb EP 2024',
      meta: [
        {
          hid: 'index',
          name: '🏴‍☠️ Piráti - Volební kalkulačka k primárkám do voleb EP 2024',
          description: '🏴‍☠️ Piráti - Volební kalkulačka k primárkám do voleb EP 2024'
        }
      ]
    }
  },

  mounted: function () {
    // this.$store.dispatch('beep')
  },

  components: {
    // Darujme, 
    // Analytics
  }
}
</script>

<style scoped>
  .page {
    /* size depends on sizes of header */
    min-height: calc(100vh - 40px - 18px);
    max-width: 666px;
  }
</style>