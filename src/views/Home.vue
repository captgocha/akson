<template>
  <main class="home">
    <div class="advertising-opportunities section">
      <div class="container">
        <h1 class="advertising-opportunities-title section-title">Рекламные возможности <span>akson.ru</span></h1>
        <div class="auditory">
          <h2 class="auditory-title section-subtitle">Аудитория сайта</h2>
          <div class="auditory-parameters">

            <div class="auditory-parameters__item auditory-parameters__item_attendance">
              <div class="auditory-parameters__title">Посещаемость</div>
              <div class="auditory-parameters__wrapper">
                <div class="auditory-parameters__diagram">
                  <img src="@/assets/images/attendance-chart.png" alt="Диаграмма посещаемости">
                </div>
                <div class="auditory-parameters__text">
                  <div class="line">
                    <div class="line__image">
                      <img src="@/assets/images/open-eye.png" alt="Просмотры">
                    </div>
                    <div class="line__description">
                      <span>73 млн</span>
                      Общее число просмотров страниц за 2018 год
                    </div>
                  </div>
                  <div class="line">
                    <div class="line__image">
                      <img src="@/assets/images/people.png" alt="Просмотры">
                    </div>
                    <div class="line__description">
                      <span>1,1 млн</span>
                      Средняя ежемесячная посещаемость сайта по данным SimilarWeb за 2018 год
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="auditory-parameters__item auditory-parameters__item_gender">
              <div class="auditory-parameters__title">Пол</div>
              <div class="auditory-parameters__wrapper">
                <div class="auditory-parameters__diagram">
                  <img src="@/assets/images/gender-chart.png" alt="Диаграмма посещаемости">
                </div>
                <div class="auditory-parameters__text">
                  <div
                    class="line"
                    v-for="item in genderItems"
                    :key="item.id"
                  >
                    <div 
                      class="line__circle"
                      :style="{ background: item.circleColor }"
                    ></div>
                    <div class="line__description">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="auditory-parameters__item auditory-parameters__item_age">
              <div class="auditory-parameters__title">Возраст</div>
              <div class="auditory-parameters__wrapper">
                <div class="auditory-parameters__diagram">
                  <img src="@/assets/images/age-chart.png" alt="Диаграмма посещаемости">
                </div>
                <div class="auditory-parameters__text">
                  <div 
                    class="line"
                    v-for="item in ageItems"
                    :key="item.id"
                  >
                    <div 
                      class="line__circle"
                      :style="{ background: item.circleColor }"
                    ></div>
                    <div class="line__description">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    genderItems: [
      { id: 1, name: 'Мужской', circleColor: '#FD5A3E' },
      { id: 2, name: 'Женский', circleColor: '#77B6E7' },
    ],
    ageItems: [
      { id: 1, name: '25-34 года', circleColor: '#81AE56' },
      { id: 2, name: '35-44 года', circleColor: '#FFD963' },
      { id: 3, name: '45-54 года', circleColor: '#CF2F36' },
      { id: 4, name: '55 лет и старше', circleColor: '#77B6E7' },
      { id: 5, name: '18-24 года', circleColor: '#A955B8' },
      { id: 6, name: 'Остальные', circleColor: '#F3F1ED' },
    ]
  })
}
</script>

<style lang="scss" scoped>
.advertising-opportunities {
  padding-top: 50px;
}

.section-title {
  font-size: 44px;
  font-weight: 600;
  text-align: center;
  color: #333;
  margin-bottom: 42px;
}

.section-title span {
  color: #FF000A;
}

.section-subtitle {
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
}

.auditory-parameters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__title {
    display: flex;
    justify-content: center;
    font-size: 17px;
    color: #333;
    margin-bottom: 16px;
  }

  &__wrapper {
    display: flex;
  }

  &__item_gender &__wrapper,
  &__item_age &__wrapper {
    align-items: center;
  }

  &__diagram {
    margin-right: 30px;
  }

  &__item_gender .line,
  &__item_age .line {
    align-items: center;
  }
}

.auditory-parameters__item_attendance .line {
  margin-bottom: 8px;
}

.line {
  display: flex;

  &__image {
    padding-top: 3px;
    margin-right: 6px;
  }

  &__circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
  }

  &__description {
    max-width: 204px;
    font-size: 13px;
    line-height: 22px;
    color: #666;
  }

  &__description span {
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
}
</style>
