const A4 = {
  width: 210,
  height: 297,
  padding: 10
};

const REL = {
  struct: 'structure',
  header: 'header',
  ltxt: 'large text',
  mtxt: 'medium text',
  stxt: 'small text',
  hlist: 'horizontal-list',
  vlist: 'vertical-list',
  img: 'image',
  period: 'period'
};

const democv = {
  style: {
    _rel: REL.struct,
    base_color: 'rgb(0, 188, 212)',
    accent_color: 'Chocolate',
    text_color: 'Black',
    text_alt_color: 'White',
    background_color: 'Snow',
    layout: Object.assign(A4, {
      textAlign: 'left',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: 'Snow'
    })
  },
  general: {
    _rel: REL.vlist,
    val: [
      {
        image_url: {
          _rel: REL.img,
          val: '/static/img/Louie.jpg'
        }
      },
      {
        name: {
          _rel: REL.ltxt,
          val: 'Radu Nedisan'
        }
      },
      {
        birth_date: {
          _rel: REL.mtxt,
          val: '01/10/1989'
        }
      },
      {
        contact: {
          _rel: REL.vlist,
          val: [
            {
              phone: {
                _rel: REL.stxt,
                val: '0742020994'
              }
            },
            {
              email: {
                _rel: REL.stxt,
                val: 'radu.nedisan@evozon.com'
              }
            },
            {
              address: {
                _rel: REL.stxt,
                val: 'Cluj-Napoca'
              }
            }
          ],
        }
      }
    ]
  },
  overview: {
    _rel: REL.vlist,
    val: [
      {
        looking_for: {
          _rel: REL.stxt,
          val: 'Front End Developer'
        }
      },
      {
        current: {
          _rel: REL.stxt,
          val: 'Front End Developer'
        }
      },
      {
        current_employee: {
          _rel: REL.stxt,
          val: 'Evozon'
        }
      },
      {
        native_languages: {
          _rel: REL.hlist,
          val: ['Romainan']
        }
      },
      {
        languages: {
          _rel: REL.hlist,
          val: ['English', 'Japanese']
        }
      },
      {
        highlights: {
          _rel: REL.hlist,
          val: ['JavaScript', 'ES6', 'React']
        }
      },
      {
        skills: {
          _rel: REL.hlist,
          val: ['Teamwork', 'Communication', 'Results-driven']
        }
      }
    ]
  },
  work: {
    _rel: REL.vlist,
    val: [
      {
        company: {
          _rel: REL.mtxt,
          val: 'Evozon'
        },
        description: {
          _rel: REL.stxt,
          val: ''
        },
        highlights: {
          _rel: REL.stxt,
          val: ''
        },
        period: {
          _rel: REL.period,
          val: {
            start: '12/07/2014',
            end: 'present'
          }
        }
      },
      {
        company: {
          _rel: REL.mtxt,
          val: 'Evozon'
        },
        description: {
          _rel: REL.stxt,
          val: ''
        },
        highlights: {
          _rel: REL.stxt,
          val: ''
        },
        period: {
          _rel: REL.period,
          val: {
            start: '12/08/2011',
            end: '12/07/2014'
          }
        }
      }
    ],
  },
  studies: {
    _rel: REL.vlist,
    val: [
      {
        name: {
          _rel: REL.stxt,
          val: 'University'
        }
      },
      {
        period: {
          _rel: REL.period,
          val: {
            start: '10/2008',
            end: '06/2011'
          }
        },
      },
      {
        qualifications: {
          _rel: REL.hlist,
          val: ['']
        }
      }
    ]
  }
};

module.exports.democv = democv;
module.exports.REL = REL;
