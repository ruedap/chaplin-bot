require 'spec_helper'

describe Remark do
  describe '.count' do
    it 'returns 31' do
      expect(Remark.count).to eq(31)
    end
  end

  describe '.first' do
    it 'returns first phrase' do
      expect(Remark.first.phrase).to eq('私の最高傑作は次回作だ。')
    end
  end
end
