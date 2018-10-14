import { shallowMount } from '@vue/test-utils';
import CommentsList from '@/components/Comments/CommentsList.vue';

describe('CommentsList.vue', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(CommentsList)
    jest.resetModules()
    jest.clearAllMocks()
  })

  describe('Computed values', () => {
    const COMMENTS_NUMBER = 2;
    it(`returns "Show comments (${COMMENTS_NUMBER})" if commentsOpen equals false`, () => {
      cmp.setData({
        commentsOpen: false,
      }),
      cmp.setProps({
        comments_number: COMMENTS_NUMBER,
      })

      expect(cmp.vm.buttonText).toBe(`Show comments (${COMMENTS_NUMBER})`)
    })

    it(`returns "Hide comments (${COMMENTS_NUMBER})" if commentsOpen equals true`, () => {
      cmp.setData({
          commentsOpen: true,
        }),
        cmp.setProps({
          comments_number: COMMENTS_NUMBER,
        })

      expect(cmp.vm.buttonText).toBe(`Hide comments (${COMMENTS_NUMBER})`)
    })
  })
});
